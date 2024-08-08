import React, { useState } from "react";
import { IoMdAdd, IoIosSearch } from 'react-icons/io';
import { MdOutlineDateRange } from 'react-icons/md';
import { FaAngleDown } from 'react-icons/fa6';
import { IoChevronDownSharp } from 'react-icons/io5';
import { FiPlus, FiTrash } from "react-icons/fi";
import { motion } from "framer-motion";
import { FaFire } from "react-icons/fa";

const AssignJob = () => {
    return (
        <div className=' '>
            <div className='flex justify-between items-center text-[#C9C9C9] pb-4 border-b-2 mb-5'>
                <div className='text-[#C9C9C9] pb-2'>
                    <h1 className='text-[15px] leading-4 font-MExtended text-[#171717] -pb-3 font-[400]'>Assign jobs</h1>
                </div>
                <div className="relative  flex  ">
                    <MdOutlineDateRange size={18} className='absolute mt-1.5 ml-2' />
                    <input id="datepicker-autohide" datepicker datepicker-autohide type="text" className=" border-[2px] text-[#939393] bg-white border-gray-300  text-[12px] rounded-md focus:ring-blue-500 focus:border-blue-500 block w-[150px] ps-7 h-[38px] " placeholder="Date created" />
                    <IoChevronDownSharp size={17} className='-ml-7 mt-2' />
                </div>
            </div>
            <Board />
        </div>
    );
};

const Board = () => {
    const [cards, setCards] = useState(DEFAULT_CARDS);

    return (
        <div className="flex h-full w-full gap-3  p-4">
            <Column
                title="All Briefs"
                column="All Briefs"
                titleColor="#F0F0F0"
                cards={cards}
                setCards={setCards}
            />
            <Column
                title="Priority"
                column="Priority"
                titleColor="#ffd5d0"
                cards={cards}
                setCards={setCards}
            />
            <Column
                title="Ongoing"
                column="Ongoing"
                titleColor="#ffd0d7"
                cards={cards}
                setCards={setCards}
            />
            <Column
                title="Done"
                column="Done"
                titleColor="#b7f7d1"
                cards={cards}
                setCards={setCards}
            />
            <BurnBarrel setCards={setCards} />
        </div>
    );
};

const Column = ({ title, titleColor, cards, column, setCards }) => {
    const [active, setActive] = useState(false);

    const handleDragStart = (e, card) => {
        e.dataTransfer.setData("cardId", card.id);
    };

    const handleDragEnd = (e) => {
        const cardId = e.dataTransfer.getData("cardId");

        setActive(false);
        clearHighlights();

        const indicators = getIndicators();
        const { element } = getNearestIndicator(e, indicators);

        const before = element.dataset.before || "-1";

        if (before !== cardId) {
            let copy = [...cards];

            let cardToTransfer = copy.find((c) => c.id === cardId);
            if (!cardToTransfer) return;
            cardToTransfer = { ...cardToTransfer, column };

            copy = copy.filter((c) => c.id !== cardId);

            const moveToBack = before === "-1";

            if (moveToBack) {
                copy.push(cardToTransfer);
            } else {
                const insertAtIndex = copy.findIndex((el) => el.id === before);
                if (insertAtIndex === undefined) return;

                copy.splice(insertAtIndex, 0, cardToTransfer);
            }

            setCards(copy);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        highlightIndicator(e);

        setActive(true);
    };

    const clearHighlights = (els) => {
        const indicators = els || getIndicators();

        indicators.forEach((i) => {
            i.style.opacity = "0";
        });
    };

    const highlightIndicator = (e) => {
        const indicators = getIndicators();

        clearHighlights(indicators);

        const el = getNearestIndicator(e, indicators);

        el.element.style.opacity = "1";
    };

    const getNearestIndicator = (e, indicators) => {
        const DISTANCE_OFFSET = 50;

        const el = indicators.reduce(
            (closest, child) => {
                const box = child.getBoundingClientRect();

                const offset = e.clientY - (box.top + DISTANCE_OFFSET);

                if (offset < 0 && offset > closest.offset) {
                    return { offset: offset, element: child };
                } else {
                    return closest;
                }
            },
            {
                offset: Number.NEGATIVE_INFINITY,
                element: indicators[indicators.length - 1],
            }
        );

        return el;
    };

    const getIndicators = () => {
        return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
    };

    const handleDragLeave = () => {
        clearHighlights();
        setActive(false);
    };

    const filteredCards = cards.filter((c) => c.column === column);

    const darkerColor = (color, amount) => {
        let usePound = false;

        if (color[0] === "#") {
            color = color.slice(1);
            usePound = true;
        }

        const num = parseInt(color, 16);

        let r = (num >> 16) + amount;
        r = r > 255 ? 255 : r < 0 ? 0 : r;

        let g = ((num >> 8) & 0x00ff) + amount;
        g = g > 255 ? 255 : g < 0 ? 0 : g;

        let b = (num & 0x0000ff) + amount;
        b = b > 255 ? 255 : b < 0 ? 0 : b;

        return (usePound ? "#" : "") + (r.toString(16).padStart(2, "0")) + (g.toString(16).padStart(2, "0")) + (b.toString(16).padStart(2, "0"));
    };

    return (
        <div className="w-40 rounded-md p-4 text-[#171717] text-[12px] font-SFPro" style={{ backgroundColor: darkerColor(titleColor, -64) }}>
            <h3 className={`text-[14px] font-SFPro ${titleColor}`}>{title}</h3>
            <div
                onDrop={handleDragEnd}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                className={` rounded-md  ${active ? "rounded-md my-5" : "rounded-md"
                    }`}
            >
                {filteredCards.map((c) => {
                    return <Card key={c.id} {...c} handleDragStart={handleDragStart} />;
                })}
                <DropIndicator beforeId={null} column={column} />
                <AddCard column={column} setCards={setCards} />
            </div>
        </div>
    );
};

const Card = ({ title, id, column, handleDragStart }) => {
    let bgColor;
    switch (column) {
        case "All Briefs":
            bgColor = "bg-[#F5F5F5]";
            break;
        case "Priority":
            bgColor = "bg-[#ffd5d0]";
            break;
        case "Ongoing":
            bgColor = "bg-[#ffd0d7]";
            break;
        case "Done":
            bgColor = "bg-[#b7f7d2]";
            break;
        default:
            bgColor = "";
    }

    return (
        <>
            <DropIndicator beforeId={id} column={column} />
            <motion.div
                layout
                layoutId={id}
                draggable="true"
                onDragStart={(e) => handleDragStart(e, { title, id, column })}
                className={`rounded-md p-3 active:cursor-grabbing ${bgColor}`}
            >
                <p className="text-[12px] leading-3 rounded-md font-SFPro font-[400] ">{title}</p>
            </motion.div>
        </>
    );
};

const DropIndicator = ({ beforeId, column }) => {
    return (
        <div
            data-before={beforeId || "-1"}
            data-column={column}
            className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
        />
    );
};

const BurnBarrel = ({ setCards }) => {
    const [active, setActive] = useState(false);

    const handleDragOver = (e) => {
        e.preventDefault();
        setActive(true);
    };

    const handleDragLeave = () => {
        setActive(false);
    };

    const handleDragEnd = (e) => {
        const cardId = e.dataTransfer.getData("cardId");

        setCards((pv) => pv.filter((c) => c.id !== cardId));

        setActive(false);
    };

    return (
        <></>
        // <div
        // 	onDrop={handleDragEnd}
        // 	onDragOver={handleDragOver}
        // 	onDragLeave={handleDragLeave}
        // 	className={`mt-10 grid h-28 w-28 shrink-0 place-content-center rounded border text-3xl ${active
        // 			? "border-red-800 "
        // 			: "border-neutral-500 "
        // 		}`}
        // >
        // 	{active ? <FaFire className="animate-bounce" /> : <FiTrash />}
        // </div>
    );
};

const AddCard = ({ column, setCards }) => {
    const [text, setText] = useState("");
    const [adding, setAdding] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!text.trim().length) return;

        const newCard = {
            column,
            title: text.trim(),
            id: Math.random().toString(),
        };

        setCards((pv) => [...pv, newCard]);

        setAdding(false);
    };

    return (
        <>
            {adding ? (
                <motion.form layout onSubmit={handleSubmit}>
                    <textarea
                        onChange={(e) => setText(e.target.value)}
                        autoFocus
                        placeholder="Add new task..."
                        className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0"
                    />
                    <div className="mt-1.5 flex items-center justify-end gap-1.5">
                        <button
                            onClick={() => setAdding(false)}
                            className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
                        >
                            Close
                        </button>
                        <button
                            type="submit"
                            className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
                        >
                            <span>Add</span>
                            <FiPlus />
                        </button>
                    </div>
                </motion.form>
            ) : (
                <motion.button
                    layout
                    onClick={() => setAdding(true)}
                    className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
                >
                    <span>Add card</span>
                    <FiPlus />
                </motion.button>
            )}
        </>
    );
};

const DEFAULT_CARDS = [
    // BACKLOG
    { title: "Mobile System", id: "1", column: "All Briefs" },
    { title: "Website design", id: "2", column: "All Briefs" },
    { title: "Branding", id: "3", column: "All Briefs" },
    { title: "Emailer", id: "4", column: "All Briefs" },
    { title: "Outdoors", id: "5", column: "All Briefs" },
    // Priority
    {
        title: "Website design",
        id: "6",
        column: "Priority",
    },
    { title: "Branding", id: "7", column: "Priority" },
    { title: "Outdoors", id: "8", column: "Priority" },
    { title: "Mobile app", id: "9", column: "Priority" },
    // Ongoing
    {
        title: "Website design",
        id: "10",
        column: "Ongoing",
    },
    { title: "Branding", id: "11", column: "Ongoing" },
    { title: "Mobile  design", id: "12", column: "Ongoing" },
    // DONE
    {
        title: "Branding",
        id: "13",
        column: "Done",
    },
];

export default AssignJob;
