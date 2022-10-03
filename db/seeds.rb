# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
Perfume.destroy_all
Review.destroy_all
User.destroy_all

no5 = Perfume.create(name: "No. 5", brand: "Chanel")
flowerbomb = Perfume.create(name: "Flowerbomb", brand: "Viktor & Rolf")
miss_dior = Perfume.create(name: "Miss Dior", brand: "Dior")
black_opium = Perfume.create(name: "Black Opium", brand: "Yves Saint Laurent")
daisy = Perfume.create(name: "Daisy", brand: "Marc Jacobs")
fenty = Perfume.create(name: "Fenty", brand: "Fenty Beauty")
acftn = Perfume.create(name: "A Chant for the Nymph", brand: "Gucci")
si = Perfume.create(name: "Sí", brand: "Giorgio Armani")

User.create(username: "the-nose-knows")
User.create(username: "i-smell-nice")
User.create(username: "p-eau")
User.create(username: "spritzing-ditz")

Review.create(user_id: User.first.id, perfume_id: no5.id, rating: 7, comment: "It smells like my grandma", image: "https://fimgs.net/mdimg/perfume/375x500.69912.jpg", would_buy_again: false)
Review.create(user_id: User.second.id, perfume_id: miss_dior.id, rating: 8, comment: "I like this one", image: "https://eco-beauty.dior.com/dw/image/v2/BDGF_PRD/on/demandware.static/-/Sites-master_dior/default/dw24c7a4c2/assets/Y0996347/Y0996347_C099600764_E01_GHC.jpg?sw=715&sh=773&sm=fit&imwidth=300", would_buy_again: false)
Review.create(user_id: User.third.id, perfume_id: black_opium.id, rating: 6, comment: "My dog doesn't barks when I wear it", image: "https://www.yslbeautyus.com/on/demandware.static/-/Sites-ysl-master-catalog/default/dw4c81bed4/images/3365440787971.jpg", would_buy_again: false)
Review.create(user_id: User.fourth.id, perfume_id: fenty.id, rating: 9, comment: " I bought this to feel closer to Rihanna, and I do", image: "https://cdn.shopify.com/s/files/1/0341/3458/9485/files/Launch_Home-2_1_421efb4a-1ac1-4a46-8c10-9f94423a6c98_2160x.jpg?v=1650993086", would_buy_again: true)
Review.create(user_id: User.first.id, perfume_id: si.id, rating: 5, comment: "My stalker really likes this", image: "https://i5.walmartimages.com/asr/e98379c6-c074-44e7-ab40-0b9f6b65ceb6.02be41da9c4b28a3a4d34124db9fed3b.jpeg", would_buy_again: true)



