class ChangeLikedColumnToUsers < ActiveRecord::Migration[5.2]
  def up
    change_column :users, :liked, :integer, default: 0
  end

  def down
    change_column :users, :liked, :integer
  end
end
