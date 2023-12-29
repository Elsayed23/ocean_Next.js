import Image from "next/image"

const Clients = () => {


    const urls = ['company-1', 'company-2', 'company-3', 'company-4', 'company-5']

    const imgs = urls.map((url, idx) => {
        return <Image key={idx} src={require(`../../../public/${url}.svg`)} alt="company" className="mx-auto" />
    })


    return (
        <div className="my-32 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-0">
            {imgs}
        </div>
    )
}

export default Clients