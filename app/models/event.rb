class Event < ApplicationRecord
  validates :name, presence: true
  validates :amount_due, presence: true
  validates :flow, presence: true
end
