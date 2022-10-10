import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

export default function Subscribed() {
  const { width, height } = useWindowSize()
  return (
    <div className="w-screen flex flex-col items-center">
     <Confetti
      width={width}
      height={height}
      />
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpngimg.com%2Fuploads%2Fconfetti%2Fconfetti_PNG86947.png&f=1&nofb=1&ipt=cc4fae6873bf9bd0afd847b46bb9c0e6fa1ef7ce1c3f45496df7235e0dfdefbe&ipo=images"
           className="w-60 m-10"/>

      <h1 className="text-4xl font-bold w-1/2 text-center">Congratulations!</h1>
      <p className="text-gray-700 mt-4">Check your email <strong>everyday at 11:00AM</strong> for some hot tech news. See you there!</p>
    </div>
  )
}
