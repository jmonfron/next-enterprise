import { KeyIcon, LockClosedIcon, WrenchIcon } from '@heroicons/react/20/solid'
import {ButtonIcon} from "../../components/ButtonIcon/ButtonIcon";
import {PhoneArrowUpRightIcon} from "@heroicons/react/24/solid";

const features = [
    {
        name: 'Dépannage express',
        description:
            <p>Nos serruriers interviennent en moins de <span className="text-primary-400 font-bold">30 minutes</span>, <span className="text-primary-400 font-bold">24h/24</span> et <span className="text-primary-400 font-bold">7j/7</span>, pour toutes vos urgences en serrurerie.
            </p>
,
        icon: KeyIcon,
    },
    {
        name: 'Sécurisation renforcée',
        description: 'Protégez votre domicile avec des serrures de haute sécurité et des systèmes anti-effraction certifiés.',
        icon: LockClosedIcon,
    },
    {
        name: 'Installation de serrures',
        description: 'Que ce soit pour une porte d’entrée, un portail ou une porte de garage, nous installons tout type de serrure pour répondre à vos besoins.',
        icon: WrenchIcon,
    },
]

export default function Hero() {
    return (
        <div className="overflow-hidden bg-white py-24 sm:py-32" id={'accueil'}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-primary-400">Votre serrurier d’urgence en Haute Garonne</h2>
                            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                Interventions rapides et sécurisées <span className={'underline decoration-primary-400 underline-offset-8'}>24/7</span>
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Que vous soyez enfermé dehors, ayez besoin de renforcer votre sécurité, ou d’installer une nouvelle serrure, notre équipe est là pour vous assister avec rapidité et expertise.
                            </p>
                            <div className={'mt-6'}>
                                <ButtonIcon href={'/'} Icon={PhoneArrowUpRightIcon}>06 00 00 00 00</ButtonIcon>
                            </div>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-primary-400" />
                                            {feature.name}
                                        </dt>{' '}
                                        <dd className="inline">{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <img
                        alt="Product screenshot"
                        src="/hero-1.webp"
                        width={2432}
                        height={1442}
                        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                    />
                </div>
            </div>
        </div>
    )
}
