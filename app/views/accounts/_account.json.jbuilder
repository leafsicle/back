json.extract! account, :id, :name, :due, :income, :amount_due, :frequency, :paid, :notes, :created_at, :updated_at
json.url account_url(account, format: :json)
