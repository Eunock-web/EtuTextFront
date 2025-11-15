import type { LucideIcon } from "lucide-react"

function Card({ titre, description, Icon, titreClassName, descriptionClassName, iconClassName, cardClassName }: { titre: string, description: string, Icon?: LucideIcon, titreClassName?: string, descriptionClassName?: string, iconClassName?: string, cardClassName?: string }) {
    return (
        <div className={"flex flex-col " + cardClassName}>
            <div>
                {Icon && <Icon className={iconClassName} />}
            </div>

            <div className="flex flex-col space-y-2">
                <h1 className={`font-bold text-xl ${titreClassName || ''}`}>
                    {titre}
                </h1>
                <p className={`text-gray-300 ${descriptionClassName || ''}`}>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Card