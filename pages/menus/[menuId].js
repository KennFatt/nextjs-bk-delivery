import { loadData, getMenuIds, getMenuById } from "@/lib/data-handler";

import MenuContainer from "@/components/MenuContainer";

export default function MenuPage(props) {
  return (
    <MenuContainer selectedMenu={props.selectedMenu} menuIds={props.menuIds} />
  );
}

export async function getStaticPaths() {
  /** Genereate all known menus */
  const menuIds = getMenuIds(await loadData()).map((id) => ({
    params: {
      menuId: id,
    },
  }));

  return {
    paths: menuIds,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const data = await loadData();
  if (!data) {
    return { notFound: true };
  }

  const menuIds = getMenuIds(data);
  const selectedMenu = getMenuById(data, context.params.menuId);

  return {
    props: { selectedMenu, menuIds },
  };
}
