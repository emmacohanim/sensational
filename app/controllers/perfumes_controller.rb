class PerfumesController < ApplicationController

    def index 
        render json: Perfume.all
    end

    def show
        perfume = Perfume.find(params[:id])
        render json: perfume
    end

    def create
        perfume_hash = perfume_params.to_h
        perfume_hash[:reviews_attributes][0][:user_id] = current_user.id
        perfume = Perfume.create!(perfume_hash)
        render json: perfume, status: :created
    end

    private

    def perfume_params
        # params.permit(:name, :brand)
        params.require(:perfume).permit(:name, :brand, reviews_attributes: [:rating, :comment, :image, :would_buy_again])
    end

end
