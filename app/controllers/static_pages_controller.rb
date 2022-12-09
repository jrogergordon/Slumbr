class StaticPagesController < ApplicationController




#beep boop I am lost. But that's okay, I will learn.


  def frontend_index
    render file: Rails.root.join('public', 'index.html')
  end










  def root
  end






















end
