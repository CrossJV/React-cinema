export default function Hide({ children, isVisible }){
	return isVisible ? children : <></>;
}