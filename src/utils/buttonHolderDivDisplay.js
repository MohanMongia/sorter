export default function hider(buttonHolderDivRef)
{
    buttonHolderDivRef.style.visibility="hidden";
    buttonHolderDivRef.style.pointerEvents="none";
}

export function shower(buttonHolderDivRef)
{
    buttonHolderDivRef.style.visibility="visible";
    buttonHolderDivRef.style.pointerEvents="auto";
}