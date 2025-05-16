// import { useParams } from "react-router-dom"
import Hero from '../../components/Hero'
import Section from '../../components/Section'

const Product = () => {
  // const {id} = useParams()

  return (
    <>
      <Hero />
      <Section title="About the game" background="black">
        <p>
          Clair Obscur: Expedition 33 is a turn-based RPG set in a dark fantasy
          world inspired by Belle Époque France. Players lead Expedition 33 on a
          desperate mission to stop the Artífice, a mysterious entity that
          annually paints a number—marking all people of that age for death.
          With a gripping narrative, strategic combat blending real-time
          mechanics, and stunning visuals, the game delivers an emotional
          journey of hope, loss, and defiance against fate.
        </p>
      </Section>
      <Section title="More details" background="grey">
        <p>
          <b>Platform:</b> Steam, PS5, Xbox Series S/X <br />
          <b>Developer:</b> Sandfall Interactive, Sandfall S.A.S. <br />
          <b>Studio:</b> Kepler Interactive <br />
          <b>Languages: </b>English, French, Italian, German, Spanish (Spain),
          Japanese, Korean, Polish, Portuguese (Brazil), Russian, Simplified
          Chinese, and Traditional Chinese.
        </p>
      </Section>
      <Section title='Gallery' background='black'>
        <div>
          pictures
        </div>
      </Section>
    </>
  )
}

export default Product
