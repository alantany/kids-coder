class SessionsController < Devise::SessionsController
  include UsersHelper

  # see also
  # https://github.com/plataformatec/devise/blob/v3.2/app/controllers/devise/sessions_controller.rb

  # GET /resource/sign_in
  def new
    session[:user_return_to] ||= params[:user_return_to]
    @already_hoc_registered = params[:already_hoc_registered]
    @hide_sign_in_option = true
    if params[:providerNotLinked]
      if params[:useClever]
        # The provider was not linked, and we need to tell the user to sign in specifically through Clever
        flash.now[:alert] = I18n.t 'auth.use_clever', provider: I18n.t("auth.#{params[:providerNotLinked]}")
      else
        # This code is only reached through the oauth flow when the user already has an email account.
        # Usually email would not be available for students, this is a special case where oauth fills it in.
        flash.now[:alert] = I18n.t 'auth.not_linked', provider: I18n.t("auth.#{params[:providerNotLinked]}")
        @email = params[:email]
      end
    end
    super
  end

  # GET /resource/clever_takeover
  def clever_takeover
    sign_out_but_preserve_takeover_state
    redirect_to action: :new
  end

  def clever_modal_dismissed
    clear_takeover_session_variables
    render status: 200, nothing: true
  end

  # POST /resource/sign_in
  def create
    super do |user|
      check_and_apply_oauth_takeover(user)
    end
  end

  # DELETE /resource/sign_out
end
