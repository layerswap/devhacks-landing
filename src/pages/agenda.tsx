import EventAgenda from "@/components/pageComponents/EventAgenda";
import Layout from "@/components/pageComponents/Layout";
import Rules from "@/components/pageComponents/Rules";

export default function AgendaPage() {
    return (
        <Layout>
            <EventAgenda />
            <Rules />
        </Layout>
    )
}