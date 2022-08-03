/**
 * The Next.js <Link> component does not forward unknown props to the underlying <a>
 * element, so it won't work properly when used inside a <Menu.Item> from Headless UI.
 * Therefore, we must create our own component that wraps <Link> and forwards unknown
 * props to the child <a> element.
 * https://headlessui.com/react/menu#integrating-with-next-js
 */
import { forwardRef } from "react";
import { Link } from "../../routes";

const MenuLink = forwardRef((props, ref) => {
	let { href, children, ...rest } = props;
	return (
		<Link href={href}>
			<a ref={ref} {...rest}>
				{children}
			</a>
		</Link>
	);
});

export default MenuLink;
