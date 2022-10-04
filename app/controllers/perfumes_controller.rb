class PerfumesController < ApplicationController

    def index 
        render json: Perfume.all
    end

    def show
        perfume = Perfume.find(params[:id])
        render json: perfume
    end

end
