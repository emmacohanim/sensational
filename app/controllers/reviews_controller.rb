class ReviewsController < ApplicationController



    def index 
        render json: Review.all, include: [:perfume, :user]
    end

    def create
        review = current_user.reviews.create!(review_params)
        render json: review, include: [:perfume, :user], status: :created
    end

    def update
        review = Review.find(params[:id])
        if review.user == current_user
            review.update!(update_params)
            render json: review, include: [:perfume, :user], status: :accepted
        else
            render json: {error: "Not allowed"}
        end
    end

    def destroy
        review = Review.find(params[:id])
        review.destroy
        head :no_content
    end

    def show
        review = Review.find(params[:id])
        render json: review, include: [:perfume, :user]
    end

    private


    def review_params
        params.permit(:perfume_id, :rating, :comment, :would_buy_again, :image)
    end

    def update_params
        params.permit(:rating, :comment, :would_buy_again)
    end

end
