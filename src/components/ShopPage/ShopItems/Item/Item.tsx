import React from "react";

type ItemProps = {
    item: {
        title: string;
        description: string;
        price: number;
        category: string;
        img: string;
    };
};

function Items(props: ItemProps) {
    return (
        <div className="w-80 m-11 p-6 border-2 border-rich-bordeaux">
            <img
                alt="item"
                src={props.item.img}
                width="100%"
                className="border-2 border-rich-bordeaux mb-2"
            />
            <div className="flex justify-between">
                <h4 className="uppercase font-raleway font-bold text-lg ">
                    {props.item.title}
                </h4>
                <h4 className="uppercase font-raleway font-bold text-lg">
                    {props.item.price}$
                </h4>
            </div>
            <div className="font-raleway text-sm">
                <b>CATEGORY:</b> {props.item.category}
            </div>
            <div className="font-raleway text-sm mt-2">
                {props.item.description}
            </div>
        </div>
    );
}

export default Items;
