import { loadData, getMenuIds } from "@/lib/data-handler";

import MenuContainer from "@/components/MenuContainer";

export default function MenusIndexPaeg(props) {
  return (
    <MenuContainer selectedMenu={props.selectedMenu} menuIds={props.menuIds} />
  );
}

export async function getStaticProps() {
  const data = await loadData();
  if (!data) {
    return { notFound: true };
  }

  const menuIds = getMenuIds(data);
  const selectedMenu = data[0];

  return {
    props: { selectedMenu, menuIds },
  };
}
