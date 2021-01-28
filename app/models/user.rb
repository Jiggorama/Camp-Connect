class User < ApplicationRecord
  has_and_belongs_to_many :sites
  has_many :comments

  has_secure_password

  validates :username, presence: true, uniqueness: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }
end

# has_and_belongs_to_many :favorites, class_name: 'Mineral', join_table: 'minerals_users', foreign_key: 'mineral_id', association_foreign_key: 'user_id'
