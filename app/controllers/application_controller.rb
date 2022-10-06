class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordInvalid, with: :invalid
    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    # before_action :authorize, only: [:create]

    def hello_world
        session[:count] = (session[:count] || 0) + 1
        render json: { count: session[:count] }
    end

    # def current_user
    #     @user ||= User.find(session[:user_id])
    #     @user ||= User.first
    # end

    private 

    def invalid(e)
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end

    def not_found(e)
        render json: {error: "#{e.model} not found"}, status: :not_found
    end

    # def authorize
    #     @current_user = User.find_by(id: session[:user_id])
    #     render json: { errors: [“Not authorized”] }, status: :unauthorized unless @current_user
    # end

end
