# == Schema Information
#
# Table name: users
#
#  id         :integer          not null, primary key
#  username   :text
#  email      :text
#  password   :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class User < ActiveRecord::Base
end
