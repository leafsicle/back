json.extract! event, :id, :name, :due_date, :recurring, :amount_due, :flow, :was_paid, :notes, :created_at, :updated_at
json.url event_url(event, format: :json)
