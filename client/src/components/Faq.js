import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { Component } from 'react';

class Faq extends Component {
  render() {
    return (
      <div>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Quem pode realizar o Resgate?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography>
              O Participante que está Ativo, Vinculado ou Suspenso, apenas após 36 meses da inscrição no plano de previdencia privada.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Quanto pode ser resgatado sem obrigatoriedade de cancelamento?</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className='flex-column'>
            <Typography>
              Observando o prazo de carencia de 36 meses, será possivel fazer o resgate parcial:
            </Typography>
            <Typography>
              - Resgate dos valores de Portabilidade.
            </Typography>
            <Typography>
              - Resgate dos valores de Contribuições Adicionais.
            </Typography>
            <Typography>
              - Resgate de até 20% dos valores de Contribuições Normais, a cada 2 anos.
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
    );
  }
}

export default Faq;
