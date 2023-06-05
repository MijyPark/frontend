import { useState } from 'react'

function DonationPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Thank you for your support</h1>
      <div className="money">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
         Our Fund 
        </p>
      </div>
    </>
  )
}

export default DonationPage