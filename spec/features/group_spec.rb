require 'spec_helper'
 
describe "Sign in process" do

    it "Sign me in" do
      visit "/admins/sign_in" do
        within("#new_admin") do
          fill_in '#admin_email', with: 'admin@sakanti.com'
          fill_in '#admin_password', with: '12caption3'
        end
        click_button 'Sign in'
        expect(page).to have_content 'Please choose your hotel'
      end
    end

end
  
