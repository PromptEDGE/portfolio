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
        // section row container (column on mobile)
        <section className="flex flex-col md:flex-row items-center md:items-center justify-center mx-[38px] md:mx-[135px] py-16 md:py-0 gap-8 md:gap-28">

            {/* HEADINGS COLUMN CONTAINER */}
            <div className="flex flex-col gap-6 md:gap-8 w-full md:w-auto justify-center md:justify-start items-center md:items-start">

                <h5 className="font-['Epilogue'] font-normal leading-8 tracking-[3px] uppercase text-[#EF6D58]">Faq</h5>

                <h3 className="max-w-full md:w-[371px] font-['Epilogue'] font-extrabold text-[28px] md:text-[40px] leading-tight md:leading-12 tracking-0 text-[#391400] text-center md:text-left">Frequently Asked Questions</h3>

                <p className="max-w-full md:w-[470px] font-['Epilogue'] font-normal text-[14px] md:text-[16px] leading-7 md:leading-8 tracking-0 text-[#391400]">A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house.</p>

                {/* contact us button */}
                <a href="#contact">
                    <button className="w-[110px] h-10 font-['Epilogue'] font-extrabold text-[12px] leading-8 tracking-0 text-[#391400] shadow-md    hover:bg-[#FF6A00] rounded-md px-2 pt-2 uppercase">Contact Us</button>
                </a>
            </div>

            {/* FAQ Column Content */}
            <div className="flex flex-col justify-center items-end gap-0 mt-5 md:pt-75 w-full md:w-auto">
                {faqItems.map((item, index) => {
                    const isLast = index === faqItems.length - 1
                    const isFirst = index === 0
                    const open = isOpen === item.id

                    return (
                        <div
                            key={item.id}
                            className={`w-full md:w-[570px] border border-solid border-[#F3D1BF] p-6 md:p-8 flex flex-col gap-4 md:gap-6 ${
                                isFirst ? 'rounded-tl-md rounded-tr-md border-b-0' : ''
                            } ${
                                !isLast && !isFirst ? 'border-b-0' : ''
                            } ${
                                isLast ? 'rounded-bl-md rounded-br-md' : ''
                            }`}
                        >
                            <div
                                className="flex flex-row justify-between items-center gap-4 cursor-pointer"
                                onClick={() => toggle(item.id)}
                            >
                                <h4 className="flex-1 font-['Epilogue'] font-bold text-[18px] md:text-[24px] leading-7 md:leading-8 tracking-0 text-[#391400]">
                                    {item.title}
                                </h4>
                                <img
                                    src={open ? Up : Down}
                                    alt="icon"
                                    className="w-6 h-6 md:w-8 md:h-8"
                                />
                            </div>

                            {open && (
                                <p className="w-full md:w-[470px] font-['Epilogue'] font-normal text-[14px] md:text-[16px] leading-7 md:leading-8 tracking-0 text-[#391400]">
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
