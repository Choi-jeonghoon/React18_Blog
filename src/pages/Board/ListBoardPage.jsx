import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function ListBoardPage(props) {
  const i = 1;

  const listItem = [
    {
      no: i,
      title: "title1",
      writer: "writer1",
      viewCount: i,
      written_date: "22/12/06",
    },

    {
      no: i + 1,
      title: "title2",
      writer: "writer2",
      viewCount: i,
      written_date: "22/12/06",
    },
  ];

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell align="right">제목</TableCell>
            <TableCell align="right">작성자</TableCell>
            <TableCell align="right">조회수</TableCell>
            <TableCell align="right">작성일자</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableCell>{listItem[0].no}</TableCell>
          <TableCell align="right">{listItem[0].title}</TableCell>
          <TableCell align="right">{listItem[0].writer}</TableCell>
          <TableCell align="right">{listItem[0].viewCount}</TableCell>
          <TableCell align="right">{listItem[0].written_date}</TableCell>
        </TableBody>
      </Table>
    </TableContainer>
  );

  // pagination 추가
}
export default ListBoardPage;
