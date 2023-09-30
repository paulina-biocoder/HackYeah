import classNames from "classnames";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProjectItem.scss";

export function ListItem(
    {
        iconSrc,
        title,
        description,
    }: {
        iconSrc: string,
        title: string,
        description: string
    }
) {
    return <li className="project-item-list-item">
        <img src={iconSrc}></img>
        <div className="project-item-list-item-text">
            <span className="project-item-list-item-title">
                {title}
            </span>
            <span className="project-item-list-description">
                {description}
            </span>
        </div>
    </li>
}

export function ProjectItem() {
    const { id } = useParams();
    const [itemData, setItemData] = useState<any>(null);
    const [readMore, setReadMore] = useState(false);

    console.log(id);

    // TODO use id to fetch real data instead of settimeout
    useEffect(() => {
        setTimeout(() => {
            setItemData({
                imgSrc: "/ed047db0414f7995800c52f41ebc241b.png",
                title: "Biblioteka Skawina",
                rating: 4.76,
                ratingAmount: 116,
                city: "Kraków, Polska",
                toSee: false,
                visited: true,
                programName: "Regionalny Program Operacyjny Województwa Małopolskiego na lata 2014-2020",
                projectCost: 7_295_093.79,
                projectCostEU: 2_818_770.36,
                description: `XIX-wieczny dworzec kolejowy w Skawinie lata świetności miał dawno za sobą, z upływem lat niszczał i popadał w ruinę. Dzięki Funduszom Europejskim (ponad 2,4 mln zł) teraz jest siedzibą Miejskiej Biblioteki Publicznej, liczącej ponad 40 tys. pozycji księgozbioru, i wzorowym przykładem tego, jak zrewitalizować zaniedbany zabytek, połączyć tradycję z nowoczesnością, a z podróżnego zrobić czytelnika.
                Dzięki podjazdom i windom z obiektu mogą korzystać też osoby z niepełnosprawnościami. Biblioteka podąża z biegiem czasu i oferuje innowacyjne formy wypożyczania książek. Seniorzy i osoby z niepełnosprawnościami mogą je zamówić telefonicznie z dostawą do domu. Natomiast pracujący mają możliwość odbioru bezpłatnej przesyłki z lekturami z dowolnego paczkomatu na terenie gminy. Wygodne są także zwroty – książki, płyty i audiobooki wystarczy wrzucić do specjalnej skrytki.
                Działalność placówki nie ogranicza się tylko do udostępniania książek. To także najróżniejsze akcje – konkursy, wystawy, warsztaty, zajęcia dla dzieci podczas ferii i wakacji, spotkania z ciekawymi ludźmi.
                W budynku znajduje się również galeria promująca lokalnych artystów, a przy głównym wejściu do książnicy mieści się punkt informacji turystycznej.`,
                images: ["/ed047db0414f7995800c52f41ebc241b.png", "/ed047db0414f7995800c52f41ebc241b.png", "/ed047db0414f7995800c52f41ebc241b.png"],
                reviews: []
            });
        }, 100)
    }, []);

    if (itemData === null) return null;

    return (
        <div className="project-item">
            <img src={itemData.imgSrc} alt="" aria-hidden className="project-item-image" />
            <section className="project-item-section">
                <h1 className="project-item-title">{itemData.title}</h1>
                <div className="project-item-stats">
                    <img src="/star-filled.svg" alt="" aria-hidden width={15} height={15} />
                    <span>{itemData.rating.toFixed(2)}</span>
                    <img src="/dot.svg" alt="" aria-hidden width={2} height={2} />
                    <span>({itemData.ratingAmount})</span>
                    <span className="project-item-city">({itemData.city})</span>
                </div>
                <div className="project-item-button-row">
                    <button className={classNames("project-item-button-green", itemData.toSee && ("project-item-button-green--active"))}>
                        <img src="/heart.svg" alt="" aria-hidden width={24} height={24} />
                        To see
                    </button>
                    <button className={classNames("project-item-button-green", itemData.visited && ("project-item-button-green--active"))}>
                        <img src="/square.svg" alt="" aria-hidden width={24} height={24} />
                        Visited
                    </button>
                </div>
            </section>
            <section className="project-item-section">
                <ul className="project-item-list">
                    <ListItem
                        iconSrc="/note.svg"
                        title={itemData.programName}
                        description="Program"
                    ></ListItem>
                    <ListItem
                        iconSrc="/money.svg"
                        title={itemData.projectCost}
                        description="Wartość projektu"
                    ></ListItem>
                    <ListItem
                        iconSrc="/hand-money.svg"
                        title={itemData.projectCostEU}
                        description="W tym z dofinansowania z UE"
                    ></ListItem>
                </ul>
            </section>
            <section className="project-item-section">
                <h2 className="project-item-description">About the project</h2>
                <p className={classNames("project-item-description", readMore && "project-item-description--unfolded")}>{itemData.description}</p>
                {!readMore && <button className="project-item-read-more" onClick={() => { setReadMore(true) }}>read more</button>}
            </section>
        </div>
    );
}