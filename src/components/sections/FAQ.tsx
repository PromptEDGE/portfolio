import { useState } from 'react'
import Up from '../../assets/faq/up.svg'
import Down from '../../assets/faq/down.svg'

const faqItems = [
    {
        id: 1,
        title: 'A digital agency is a business',
        text: 'Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.'
    },
    {
        id: 2,
        title: 'Hire to outsource your digital',
        text: 'Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.'
    },
    {
        id: 3,
        title: 'Hire to outsource your digital',
        text: 'Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.'
    },
    {
        id: 4,
        title: 'Hire to outsource your digital',
        text: 'Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.'
    }
]

const FAQDataBlock = () => {
    const [isOpen, setIsOpen] = useState(1)

    const toggle = (id: number) => {
        setIsOpen(prev => (prev === id ? -1 : id))
    }

    return (
        <section className="flex flex-col md:flex-row items-center justify center md:px-[135px] py-30 md:py-12">
            <div className="flex flex-col ml-20 md:ml-0 gap-6 md:gap-8 w-full justify-start items-start">
                <h5 className="w-[34px] h-8 font-['Epilogue'] font-normal leading-8 tracking-[3px] uppercase text-[#EF6D58]">Faq</h5>

                <h3 className="w-[371px] h-24 font-['Epilogue'] font-extrabold text-[40px] leading-12 tracking-0 text-[#391400]">Frequently Asked Questions</h3>

                <p className="w-[470px] h-[67px] font-['Epilogue'] font-normal text-[16px] leading-8 tracking-0 text-[#391400]">A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>

                <button className="w-[110px] h-8 font-['Epilogue'] font-normal text-[16px] leading-8 tracking-0 text-[#391400] shadow-md hover:bg-gray-100 rounded-md px-2">Contact Us</button>
            </div>

            <div className="flex flex-col justify-center items-end gap-0 mt-5 md:pt-75 w-full md:w-auto">
                {faqItems.map((item, index) => {
                    const isLast = index === faqItems.length - 1
                    const isFirst = index === 0
                    const open = isOpen === item.id

                    return (
                        <div
                            key={item.id}
                            className={`w-[570px] border border-solid border-[#F3D1BF] p-8 flex flex-col gap-6 ${
                                isFirst ? 'rounded-tl-md rounded-tr-md border-b-0' : ''
                            } ${
                                !isLast && !isFirst ? 'border-b-0' : ''
                            } ${
                                isLast ? 'rounded-bl-md rounded-br-md' : ''
                            }`}
                        >
                            <div
                                className="flex flex-row justify-between items-center gap-0 cursor-pointer"
                                onClick={() => toggle(item.id)}
                            >
                                <h4 className="w-[361px] h-8 font-['Epilogue'] font-bold text-[24px] leading-8 tracking-0 text-[#391400]">
                                    {item.title}
                                </h4>
                                <img
                                    src={open ? Up : Down}
                                    alt="icon"
                                    className="w-8 h-8"
                                />
                            </div>

                            {open && (
                                <p className="w-[470px] h-[121px] font-['Epilogue'] font-normal text-[16px] leading-8 tracking-0 text-[#391400]">
                                    {item.text}
                                </p>
                            )}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

const FAQ = () => {
    return <FAQDataBlock />
}

export default FAQ
