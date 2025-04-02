import React from "react";
import "./blogLiterature.css";


import { useNavigate } from "react-router-dom";
import MyHistoryArticle from "./MyHistoryArticle/MyHistoryArticle";
import MyHistoryList from "./MyHistoryArticle/MyHistoryList/MyHistoryList";

const BlogLiterature = () => {
  

const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/literature");
  };

  return (
    <>
     
     <main>
        <section className="literature-container">
          <div className="maestro-izquierda">
            <div className="literature-title">
              <h1>Memories APP</h1>
              <h2>
              Every moment, every story, <span>forever remembered</span>
              </h2>
              
              <p className="blogLiteratureKarla__text">
              Welcome to Memories, where we help you capture, cherish, and relive your most treasured moments. Whether it's a birthday, an achievement, or a simple but meaningful day, our platform ensures that no memory fades away.  <br />
              </p>
            </div>
          </div>
          <div className="maestro-derecha">
            <img src="/LandingImg/angryCat.png" alt="" />
          </div>
        </section>

        <MyHistoryList 
          position="left"
          altTitle="Why Memories?"
          title="We make every moment unforgettable."
          text="With our intuitive platform, you can organize your memories in unique ways, ensuring they are always within reach."
          ulText={["Create albums for special occasions", "Categorize moments by emotions or events", "Set reminders for important dates", "Share your stories with loved ones"]}
          imgSrc="angryCat.png"
        />

        <MyHistoryArticle 
          secondTitle="More than just storage…
          Our goal is to help you embrace nostalgia and keep your memories alive through personalized experiences."
        />

        <MyHistoryList 
          altTitle=""
          title="Memories that last a lifetime."
          text="Life is a collection of fleeting moments. Some bring joy, others teach us lessons, but all deserve to be remembered. With Memories, you can revisit your happiest days and reflect on the journey that made you who you are today."
          imgSrc="angryCat.png"
          highlightPhrases={['Life is a collection of fleeting moments.', 'deserve to be remembered.']}
        />

        <MyHistoryArticle 
          title="The power of memories."
          text={`Memories shape our identity and connect us with our past. Through personalized notifications and reminders, our app ensures that no special date or heartfelt story is ever forgotten.
          Instead of wondering, “What was that special moment?”, you’ll find yourself saying, “I’m so glad I kept this memory alive.”`}
          highlightPhrases={['“What was that special moment?”', '“I’m so glad I kept this memory alive.”']}
        />

        <MyHistoryList 
          position="left"
          altTitle=""
          title="Why choose Memories?"
          text="Memories is more than an app—it’s a way to preserve the essence of your life. Every photo, every note, and every notification is crafted to bring joy and nostalgia. It’s a place where the past meets the present, and where every memory finds its home."
          highlightPhrases={['preserve the essence of your life.']}
          imgSrc="angryCat.png"
        />

        <div className="literature-container">
          <p className="literature__textquote">
            Memories are more than just pictures—they are emotions, stories, and connections. <b> With Memories, every cherished moment is just a click away, ready to be relived and shared.</b>
          </p>
        </div>

        <MyHistoryArticle 
          title="Today… we celebrate memories."
          text={`Every memory holds a story, and every story deserves to be told. Memories is here to help you capture those moments, ensuring they are never lost. Because at the end of the day, it’s not just about remembering—it’s about celebrating the journey of life.`}
          highlightWords={['capture', 'celebrating', 'journey of life']}
        />
      </main>

    </>
  );
};

export default BlogLiterature;
