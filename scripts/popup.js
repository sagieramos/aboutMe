const popup = require('./module');

const article = `
Lorem Ipsum is simply dummy text of the printing and typesetting 
industry. Lorem Ipsum has been the industry's standard dummy text 
ever since the 1500s, when an unknown printer took a galley of type 
and scrambled it to make a type specimen book. It has survived not 
only five centuries, but also the leap into electronic typesetting, 
remaining essent
`;

let m_card_img = ["card1.svg", "card2.svg", "card3.svg", "card4.svg"] 

console.log(popup(m_card_img[0], article));