import type { BlogArticleContent } from "../types";

export const en: BlogArticleContent = {
  title: "The cheapest way to test an AI feature before you build it",
  description:
    "How JoinMyTrip added AI the disciplined way, and what any non-technical founder can copy: start tiny, measure one honest number, and decide the rules before you build.",
  kicker: "Case study · JoinMyTrip",
  tags: ["AI features", "Product strategy", "Case study"],
  lede: (
    <>
      A travel startup wanted to add AI. The interesting part is not the AI. It is how they made
      sure it would earn its keep before writing a single line of it.
    </>
  ),
  body: (
    <>
      <p>
        Picture the meeting. Everyone agrees the product needs AI. Someone sketches a chatbot that
        plans your whole trip, talks like a seasoned travel agent, remembers your name. In your head
        it demos beautifully. Then someone asks the only question that really matters: how will we
        know it worked, and what do we do if it does not? The room goes quiet.
      </p>

      <p>
        That quiet is where a lot of budgets go to die. This is the story of{" "}
        <a href="https://joinmytrip.com" target="_blank" rel="noreferrer noopener">
          JoinMyTrip
        </a>
        , a travel startup that reached exactly this fork and took the boring, disciplined road
        instead. There is nothing here you need an engineering degree to follow. If you run a
        product, the lesson is yours to steal.
      </p>

      <aside>
        <p>The whole idea in five moves</p>
        <ul>
          <li>Start with the smallest version of the AI that could possibly be useful.</li>
          <li>Decide the one number that proves it worked, before you build.</li>
          <li>Test it against your current product, not against your hopes.</li>
          <li>Write the decision rules down first, so the result cannot be argued away later.</li>
          <li>Only fund the expensive version once the cheap one has earned it.</li>
        </ul>
      </aside>

      <h2>The feature nobody asked them to build</h2>

      <p>
        JoinMyTrip is a marketplace for group trips. Hosts, called TripLeaders, take small groups on
        real adventures, and travelers join the trip that fits them. The catalog was good. The
        filters were good too: destination, dates, budget, the vibe of the trip, the kind of group.
        The problem was not the trips. It was that finding the right one meant clicking through
        filter after filter, and people quietly gave up somewhere in the middle.
      </p>

      <p>
        The exciting fix was a full AI travel concierge: a chat that asks questions and recommends
        trips like a friend who has been everywhere. The fix they actually shipped first was
        smaller, almost unglamorous. One box. You describe your trip in a single sentence, something
        like <em>"diving trip in Asia in September, small group, easy on the budget,"</em> and the
        AI fills in the filters for you. The filters stay on screen, so you can nudge them. One
        step. No conversation.
      </p>

      <p>
        Why start there? Because that little box reuses everything that already works and risks
        almost nothing. The filters were already built and already good. The AI only has to do one
        job: turn a sentence into a few settings the product already understands. It cannot wander
        off, invent a destination, or quote you a trip that does not exist, because it can only pull
        from filters that are already there.
      </p>

      <blockquote>
        The smallest useful version of an AI feature is usually the one you are slightly embarrassed
        to ship. Ship it anyway. It is the cheapest question you will ever ask your customers.
      </blockquote>

      <h2>Decide the scoreboard before you build</h2>

      <p>
        Here is the trap almost every team walks into. You launch the shiny feature, then go hunting
        through the dashboard for a number that went up so you can call it a win. That is not
        measuring. That is looking for good news.
      </p>

      <p>
        JoinMyTrip did the opposite. They picked the scoreboard first, and they picked one number:
        after people saw the box, did more of them actually open a trip to look at it? That is close
        to the feature, it happens often enough to read quickly, and it is hard to fake.
      </p>

      <p>
        Notice what they did <strong>not</strong> pick. They did not judge the box on bookings.
        Bookings are the real goal, but on a site like this they are rare, far too rare to learn
        from in any reasonable window. If you wait for a booking signal, you wait months and still
        cannot tell the feature from the noise. So bookings became something to watch as a trend,
        not the number the decision rested on. Pick a scoreboard you can actually read this month,
        not the one you wish you could move.
      </p>

      <h2>Prove it was the feature, not the weather</h2>

      <p>
        Say the number goes up after launch. How do you know it was your AI box, and not a holiday
        weekend, a marketing push, or plain luck? You do not, unless you set it up so you can.
      </p>

      <p>
        The move is simple and you do not need statistics to grasp it. Show the new box to a random
        half of your visitors. Keep the other half on the exact site you have today. Let both run
        over the same weeks. Now compare the two groups. Whatever difference shows up is the
        feature, because everything else, the season, the campaign, the mood of the internet, hit
        both halves equally. Without that held-back half, you are just telling yourself a story.
      </p>

      <h2>Write the rules before you see the results</h2>

      <p>
        Before a single visitor saw the box, JoinMyTrip wrote down what each outcome would mean.
        Clear win, and it ships to everyone. Wins only in one corner of the site, so it ships just
        there. Flat but not harmful, so it stays on and keeps gathering data. Weak, so it goes back
        for another pass rather than getting thrown away.
      </p>

      <p>
        This sounds like paperwork. It is actually the whole game. Deciding what counts as success
        after you have seen the numbers is how smart teams talk themselves into keeping things that
        do not work. Agree on the bar while nobody knows the score, and the result cannot be spun
        later.
      </p>

      <h2>Make the expensive version earn its seat</h2>

      <p>
        The big AI concierge, the one everyone got excited about in the first meeting, was never
        cancelled. It was made to wait. It only gets built if the cheap box proves that people
        genuinely want to describe their trips in words rather than click filters. The small, safe
        bet is the ticket to the big, expensive one.
      </p>

      <p>
        And because the concierge costs more to build and run, it answers to a higher bar. The box
        only had to get more people to open a trip. The concierge has to move the thing that pays
        the bills: real bookings, not just clicks. Cheap features can be judged on cheap signals.
        Expensive features have to touch revenue. Match the size of the proof to the size of the
        bet.
      </p>

      <h2>The five moves you can copy</h2>

      <p>
        You do not run a travel marketplace, and it does not matter. The pattern travels to almost
        any product thinking about AI:
      </p>

      <ul>
        <li>
          <strong>Shrink the idea.</strong> Find the smallest version of the AI that reuses what you
          already have and could still be useful on its own.
        </li>
        <li>
          <strong>Name the scoreboard first.</strong> One honest number, close to the feature,
          frequent enough to read soon.
        </li>
        <li>
          <strong>Hold a half back.</strong> Compare the feature against your real product, so you
          can tell signal from season.
        </li>
        <li>
          <strong>Pre-commit the rules.</strong> Decide what ship, keep, and kill look like before
          the data lands.
        </li>
        <li>
          <strong>Earn the big bet.</strong> Let the cheap experiment unlock the expensive build,
          and hold the expensive build to a higher bar.
        </li>
      </ul>

      <p>
        None of this is about being cautious for its own sake. It is about spending your money on
        the version of AI your customers actually want, and finding out which version that is for
        the price of a small box instead of a big rebuild. That is the difference between adding AI
        because it is on the roadmap, and adding AI because it earns its place.
      </p>

      <p>
        If you are weighing an AI feature right now, the most useful thing you can do is work out
        how small the first honest step could be. More often than not, that is the entire
        conversation.
      </p>
    </>
  ),
};
