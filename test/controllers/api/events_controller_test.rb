require 'test_helper'

class Api::EventsControllerTest < ActionDispatch::IntegrationTest
  test "should get index," do
    get api_events_index,_url
    assert_response :success
  end

  test "should get show," do
    get api_events_show,_url
    assert_response :success
  end

  test "should get new," do
    get api_events_new,_url
    assert_response :success
  end

  test "should get edit," do
    get api_events_edit,_url
    assert_response :success
  end

  test "should get create," do
    get api_events_create,_url
    assert_response :success
  end

  test "should get update," do
    get api_events_update,_url
    assert_response :success
  end

  test "should get destroy" do
    get api_events_destroy_url
    assert_response :success
  end

end
