// Layouts
import MainLayout from "../layouts/MainLayout";

// Components
import ListTasks from "../components/list/ListTasks";

export default function Homepage() {
    return (
        <>
            <MainLayout page_title="Boa tarde, Coelho!">
                <ListTasks />
            </MainLayout>
        </>
    );
}