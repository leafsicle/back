class ApplicationController < ActionController::Base
  protect_from_forgery unless: -> { request.format.json? }
  def fallback_index_html
    if Rails.env.production?
      render :file => "public/index.html", layout: false
    end
  end
end
