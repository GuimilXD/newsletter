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
      <img src="https://clipartcraft.com/images/congratulations-clipart-confetti-6.png"
           className="w-60 m-10"/>

      <h1 className="text-4xl font-bold w-1/2 text-center">Congratulations!</h1>
      <p className="text-gray-700 mt-4">Check your email <strong>everyday at 11:00AM</strong> for some hot tech news. See you there!</p>
    </div>
  )
}
