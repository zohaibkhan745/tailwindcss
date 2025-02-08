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
                                <li key={index} className="flex items-center space-x-2">
                                    <CheckCircle2 size={20} />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a href="#" className="block w-full mt-6 bg-gradient-to-r from-orange-500 to-orange-800
                        text-center py-2 px-3 rounded-md">Get Started</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}
