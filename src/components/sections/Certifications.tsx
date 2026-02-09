import CertificateCard from "../ui/CertificateCard"

const Certifications = () => {
  return (
    <section className="certifications container">
      <h2>Certifications</h2>

      <div className="cert-grid">
        <CertificateCard image="/certificates/data-engineer-microsoft.jpg" title="Data Engineer Microsoft" />
        <CertificateCard image="/certificates/nvidia.jpg" title="NVIDIA AI" />
        <CertificateCard image="/certificates/huawei.jpg" title="Huawei Cloud" />
      </div>
    </section>
  )
}

export default Certifications
