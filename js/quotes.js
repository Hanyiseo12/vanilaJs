const quotes = [
  {
    quote:
      "And we know that in all things God works for the good of those who love him, who have been called according to his purpose",
    authors: "Roman 8:28",
  },
  {
    quote: "I can do all things through Christ which strengtheneth me",
    authors: "Philippians 4:13",
  },
  {
    quote:
      "Those who go out weeping, carrying seed to sow, will return with songs of joy, carrying sheaves with them",
    authors: "Psalm 126:6",
  },
  {
    quote: "The LORD is my shepherd, I shall not be in want",
    authors: "Psalm 23:1",
  },
  {
    quote:
      "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up",
    authors: "Galatian 6:9",
  },
  {
    quote:
      "Rejoice always, pray continually, give thanks in all circumstances; for this is God’s will for you in Christ Jesus",
    authors: "Thessalonians 5:16-18",
  },
  {
    quote: "Devote yourselves to prayer, being watchful and thankful",
    authors: "Colossians 4:2",
  },
  {
    quote:
      "Love is patient, love is kind. It does not envy, it does not boast, it is not proud",
    authors: "1 Corinthians 13:4",
  },
  {
    quote:
      "And now these three remain: faith, hope and love. But the greatest of these is love",
    authors: "1 Corinthians 13:13",
  },
  {
    quote:
      "I will praise you, O LORD, with all my heart; I will tell of all your wonders",
    authors: "Psalm 9:2",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.authors;
