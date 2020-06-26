import React from "react"

function BiologyQuizText(props) {

  return (
    <p>
      The project involved creating a bespoke game in the form of a quiz, with the purpose of researching learning techniques amongst students. I worked closely with the client to achieve the specific requirements they requested.
      <strong className="list-title">The concept was simple:</strong>
      <ul>
<li>There were 5 rounds</li>
<li>At the beginning of each round, the player starts off with 5 points</li>
<li>They then watch a video, and then answer several questions to test their knowledge on the subject</li>
<li>If they answer all questions correctly, they proceed to the next round. Get one incorrect? They lose a point and must watch the whole video again</li>
<li>When they complete the final round, the user is shown their score</li>
<li>Statistics about a player’s performance, and behaviour were automatically saved to a Google Drive spreadsheet which colid be accessed by the client.</li>
</ul>
It was developed in React, using Gatsby and the Ant Design UI library. 

    </p>
  )
}

export default BiologyQuizText