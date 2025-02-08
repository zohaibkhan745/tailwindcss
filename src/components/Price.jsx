import { CheckCircle2 } from "lucide-react"
import { pricingOptions } from "../constants"
export default function Price() {
  return (
    <div className="mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8
        tracking-wder">Pricing</h2>
        <div className="flex flex-wrap">
            {pricingOptions.map((option, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
                    <div className="bg-neutral-900 p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold">{option.title}</h3>
                        <p className="text-neutral-500 mt-2">{option.description}</p>
                        <div className="mt-4">
                            <span className="text-3xl font-semibold">${option.price}</span>
                            <span className="text-neutral-500">/mo</span>
                        </div>
                        <ul className="mt-4">
                            {option.features.map((feature, index) => (
                                <li key={index} className="mt-8 flex items-center">
                                    <CheckCircle2  />
                                    <span className="ml-2">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#" className="inline-flex justify-center items-center text-center
                        w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200">Subscribe</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
