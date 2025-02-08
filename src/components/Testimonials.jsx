import { testimonials } from "../constants"
export default function Testimonials() {
  return (
    <div className="mt-20 tracking-wide">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20 ">
            What are people saying
        </h2>
        <div className="flex flex-wrap justify-center">
            {
                testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 px-4 py-2">
                    <div className="bg-neutral p-6 rounded-md text-md border border-neutral-800 font-thin">
                        <p className="text-neutral-100 text-lg">
                            {testimonial.text}
                        </p>
                        <div className="flex items-start mt-8">
                            <img src={testimonial.image} alt={testimonial.name} className="h-12 w-12 rounded-full border border-neutral-300" />
                            <div className="ml-4">
                                <h3 className="text-neutral-100 font-semibold">
                                    {testimonial.user}
                                </h3>
                                <p className="text-neutral-300">
                                    {testimonial.company}
                                </p>
                            </div>
                    </div>
                    </div>
                    </div>
           )) }
           
        </div>
    </div>
  )
}
