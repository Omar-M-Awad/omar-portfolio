import { useState } from "react"

interface Props {
  image: string
  title: string
}

const CertificateCard = ({ image, title }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="certificate-card" onClick={() => setOpen(true)}>
        <img src={image} alt={title} />
      </div>

      {open && (
        <div className="modal" onClick={() => setOpen(false)}>
          <img className="modal-img" src={image} alt={title} />
        </div>
      )}
    </>
  )
}

export default CertificateCard
