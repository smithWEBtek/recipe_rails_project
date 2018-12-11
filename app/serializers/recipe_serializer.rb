class RecipeSerializer < ActiveModel::Serializer
	attributes :id, :name, :time, :instructions, :user_id, :description

	belongs_to :user
	has_many :quantities
	has_many :ingredients, through: :quantities
	
end
