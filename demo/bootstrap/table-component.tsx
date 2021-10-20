import Bootstrap from "../../bootstrap/Bootstrap";
import PFUIReactComponent from "../../system/pfui-common-things";
import Container from "../../bootstrap/Container";
import Table from "../../bootstrap/table/Table";
import TableBody from "../../bootstrap/table/TableBody";
import TableRow from "../../bootstrap/table/TableRow";
import TableCell from "../../bootstrap/table/TableCell";
import TableHead from "../../bootstrap/table/TableHead";
import TableHeadCell from "../../bootstrap/table/TableHeadCell";


export default class TableComponent extends PFUIReactComponent<any, any> {


    render() {
        return (
            <Bootstrap>
                <Container type={"default"} className={"some-class"}>
                    <Table color={"secondary"} isHoverEffectInRow={true} variant={"bordered"} verticalAlign={"middle"} viewSize={"small"}>
                        <TableHead color={"danger"}>
                            <TableRow>
                                <TableHeadCell>A</TableHeadCell>
                                <TableHeadCell>A</TableHeadCell>
                                <TableHeadCell>A</TableHeadCell>
                                <TableHeadCell>A</TableHeadCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>A</TableCell>
                                <TableCell>A</TableCell>
                                <TableCell>A</TableCell>
                                <TableCell>A</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>B</TableCell>
                                <TableCell>B</TableCell>
                                <TableCell>B</TableCell>
                                <TableCell>B</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>C</TableCell>
                                <TableCell>C</TableCell>
                                <TableCell>C</TableCell>
                                <TableCell>C</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Container>
            </Bootstrap>
        );
    }

}