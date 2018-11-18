require "application_system_test_case"

class EventsTest < ApplicationSystemTestCase
  setup do
    @event = events(:one)
  end

  test "visiting the index" do
    visit events_url
    assert_selector "h1", text: "Events"
  end

  test "creating a Event" do
    visit events_url
    click_on "New Event"

    fill_in "Amount Due", with: @event.amount_due
    fill_in "Due Date", with: @event.due_date
    fill_in "Income", with: @event.income
    fill_in "Name", with: @event.name
    fill_in "Notes", with: @event.notes
    fill_in "Recurring", with: @event.recurring
    fill_in "Was Paid", with: @event.was_paid
    click_on "Create Event"

    assert_text "Event was successfully created"
    click_on "Back"
  end

  test "updating a Event" do
    visit events_url
    click_on "Edit", match: :first

    fill_in "Amount Due", with: @event.amount_due
    fill_in "Due Date", with: @event.due_date
    fill_in "Income", with: @event.income
    fill_in "Name", with: @event.name
    fill_in "Notes", with: @event.notes
    fill_in "Recurring", with: @event.recurring
    fill_in "Was Paid", with: @event.was_paid
    click_on "Update Event"

    assert_text "Event was successfully updated"
    click_on "Back"
  end

  test "destroying a Event" do
    visit events_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Event was successfully destroyed"
  end
end
