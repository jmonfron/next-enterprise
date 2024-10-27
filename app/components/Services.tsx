import {WrenchIcon, ExclamationCircleIcon, HomeIcon, ShieldCheckIcon, KeyIcon} from "@heroicons/react/24/outline";
import {CheckIcon} from "@heroicons/react/24/solid";

const features = [
    {
        name: 'Dépannage d\'urgence',
        description:
            'Intervention rapide pour toute urgence de serrurerie, comme une porte claquée, une clé cassée ou une serrure bloquée. Nous sommes disponibles 24h/24 et 7j/7 pour vous aider en cas de besoin.',
        imageUrl: '/services/service-3.jpg',
        icon: ExclamationCircleIcon,
        checklist: [
            'Intervention en moins de 30 minutes',
            'Disponibilité 24h/24 et 7j/7',
            'Dépannage sans dégâts',
            'Diagnostic rapide et précis',
            'Techniciens qualifiés'
        ],
    },
    {
        name: 'Renforcement de la sécurité',
        description:
            'Protégez votre domicile avec des systèmes de sécurité avancés, y compris des serrures multipoints, des barres de sécurité et des portes blindées. Nous vous conseillons pour sécuriser vos biens efficacement.',
        imageUrl: '/services/service-5.jpg',
        icon: ShieldCheckIcon,
        checklist: [
            'Serrures haute sécurité certifiées',
            'Installation de portes blindées',
            'Barres de sécurité sur mesure',
            'Systèmes anti-effraction',
            'Conseils personnalisés pour votre sécurité'
        ],
    },
    {
        name: 'Installation de serrures',
        description:
            'Nous installons toutes sortes de serrures, qu’il s’agisse de serrures classiques, électroniques, ou connectées. Faites confiance à notre expertise pour une installation conforme aux normes de sécurité.',
        imageUrl: '/services/service-1.jpg',
        icon: KeyIcon,
        checklist: [
            'Installation de serrures certifiées',
            'Serrures électroniques et connectées',
            'Conforme aux normes de sécurité',
            'Service rapide et efficace',
            'Garantie de satisfaction'
        ],
    },
    {
        name: 'Ouverture de portes',
        description:
            'Vous êtes enfermé dehors ? Nous intervenons pour ouvrir votre porte sans dommage, grâce à des techniques professionnelles respectant la structure de votre serrure.',
        imageUrl: '/services/service-4.jpg',
        icon: HomeIcon,
        checklist: [
            'Ouverture sans dégât',
            'Intervention rapide',
            'Techniciens expérimentés',
            'Techniques non destructives',
            'Disponibilité 24h/24'
        ],
    },
    {
        name: 'Réparation et remplacement de serrures',
        description:
            'Nos serruriers réparent et remplacent tous types de serrures endommagées ou usées. Profitez de notre savoir-faire pour retrouver une sécurité optimale après une tentative d’effraction ou un simple dysfonctionnement.',
        imageUrl: '/services/service-2.jpg',
        icon: WrenchIcon,
        checklist: [
            'Réparation de tous types de serrures',
            'Remplacement rapide et fiable',
            'Évaluation gratuite des dommages',
            'Pièces de rechange de qualité',
            'Garantie sur les réparations'
        ],
    },
]

export default function NosServices() {
    return (
      <div className="bg-white py-24 sm:py-32" id={'prestations'}>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl underline decoration-primary-400 underline-offset-8">
              Nos prestations
            </h2>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            {features.map((feature, index) => (
              <div
                key={feature.name}
                className={`flex flex-col items-center lg:flex-row ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                } mt-10 lg:mt-16 lg:gap-8`}
              >
                {/* Image Section */}
                <div className="mb-6 flex flex-shrink-0 justify-center lg:mb-0 lg:w-1/2 lg:justify-start">
                  <img src={feature.imageUrl} alt={feature.name} className="rounded-lg object-cover shadow-lg" />
                </div>

                {/* Text Section */}
                <div className="self-start lg:w-1/2">
                  <h3 className="flex items-center text-2xl font-semibold text-primary-400">
                    <feature.icon className="mr-2 h-6 w-6 text-primary-600" /> {/* Ajout d'icône */}
                    {feature.name}
                  </h3>
                  <p className="mt-4 text-lg text-gray-600 mb-4 md:mb-12">{feature.description}</p>
                    {/* Checklist Section */}
                    <ul className="mt-4 space-y-2">
                        {feature.checklist.map((item) => (
                            <li key={item} className="flex items-center">
                                <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                                <span className="text-gray-600">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}