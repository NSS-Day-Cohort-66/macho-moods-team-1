const moods = getMoods();

let htmlString = '<article class="moodList">';

//id:,name:,imageUrl:,text:,quotes:
for (const mood of moods) {
  htmlString += `<section class="mood-card">
        <div class="mood__id">${mood.id}</div>
        <div class="mood__name">${mood.name}</div>
        <div><img  class="mood__imageUrl imageUrl--card" src="${mood.imageUrl}" /></div>
        <div class="mood__text">${mood.text}</div>
        <div class="mood__quotes">${mood.quotes}</div>
    </section>
`;
}
htmlString += `</article>`;

return htmlString;
